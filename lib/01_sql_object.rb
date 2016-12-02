require_relative 'db_connection'
require 'active_support/inflector'
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject
  def self.columns
    unless @columns
      @columns ||= DBConnection.execute2(<<-SQL)
        SELECT
          *
        FROM
          #{table_name}
      SQL

      @columns = @columns.first.map(&:to_sym)
    end

    @columns
  end

  def self.finalize!
    columns.each do |column_name|
      define_method(column_name) do
        attributes[column_name]
      end

      define_method("#{column_name}=") do |value|
        attributes[column_name] = value
      end
    end
  end

  def self.table_name=(table_name)
    @table_name = table_name
  end

  def self.table_name
    @table_name || self.to_s.tableize
  end

  def self.all
    data = DBConnection.execute(<<-SQL)
      SELECT
        *
      FROM
        #{table_name}
    SQL

    parse_all(data)
  end

  def self.parse_all(results)
    results.map { |attributes| self.new(attributes) }
  end

  def self.find(id)
    target_data = DBConnection.execute(<<-SQL, id)
      SELECT
        *
      FROM
        #{table_name}
      WHERE
        id = ?
    SQL

    target_data.empty? ? nil : self.new(target_data.first)
  end

  def initialize(params = {})
    params.each do |attr_name, value|
      column = attr_name.to_sym
      included = self.class.columns.include?(column)
      raise "unknown attribute '#{attr_name}'" unless included
      self.send("#{column}=", value)
    end
  end

  def attributes
    @attributes ||= {}
  end

  def attribute_values
    self.class.columns.map { |attribute| self.send(attribute) }
  end

  def insert
    columns = self.class.columns
    col_names = columns.join(", ")
    question_marks = (['?'] * columns.size).join(", ")

    DBConnection.execute(<<-SQL, attribute_values)
      INSERT INTO
        #{self.class.table_name} (#{col_names})
      VALUES
        (#{question_marks})
    SQL

    self.id = DBConnection.last_insert_row_id
  end

  def update
    # ...
  end

  def save
    # ...
  end
end
