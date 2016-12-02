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
end
