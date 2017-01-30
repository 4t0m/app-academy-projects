require_relative '03_associatable'

# Phase IV
module Associatable

  def has_one_through(name, through_name, source_name)
    define_method(name) do
      through_options = self.class.assoc_options[through_name]
      source_options = through_options.model_class.assoc_options[source_name]

      primary_key = source_options.primary_key
      foreign_key = self.send(through_name).send(source_options.foreign_key)

      source_options.model_class.where(primary_key => foreign_key).first
    end
  end

  def has_many_through(name, through_name, source_name)

    define_method(name) do
      # belongs_to => has_many branch

      # has_many => belongs_to branch
        all_throughs = self.class.assoc_options_many[through_name]
        all_source_options = []
        all_throughs.each do |through_options|
          source_options = through_options.model_class.assoc_options[source_name]
          all_source_options << source_options
        end

        primary_key = all_source_options.first.primary_key
        foreign_key = self.send(through_name).send(all_source_options.first.foreign_key)

        all_source_options.map do |source_options|
          source_options.model_class.where(primary_key => foreign_key)
        end
    end


  end
end
