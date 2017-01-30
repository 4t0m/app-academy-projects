class Relation
  attr_reader :params
  def initialize(klass)
    @klass = klass
    @params = {}
  end

  def where(params)
    assign(__callee__, params)
  end

  def group(*params)
    assign(__callee__, params)
  end

  def assign(method_name, params)
    @params[method_name] ||= {}
    params.each do |attr_name, value|
      @params[method_name][attr_name] = value
    end
  end

  def method_missing(method_name, *args)
    if @klass.respond_to?(method_name)

      conditions = @params[:where]

      attr_values = conditions.values

      where_string = conditions.map { |attr_name, _| "#{attr_name} = ?"}.join(' AND ')

      DBConnection.execute(<<-SQL, *attr_values)
        SELECT *
        FROM #{@klass.table_name}
        WHERE #{where_string}
      SQL
    else
      super
    end
  end
end
