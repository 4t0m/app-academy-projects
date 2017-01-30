# bin/my_script.rb
require 'addressable/uri'
require 'rest-client'

def index_users
    url = Addressable::URI.new(
      scheme: 'http',
      host: 'localhost',
      port: 3000,
      path: '/users.json'
    ).to_s

    puts RestClient.get(url)
end

index_users

def create_user(name, email)
  url = Addressable::URI.new(
    scheme: 'http',
    host: 'localhost',
    port: 3000,
    path: '/users.json'
  ).to_s

  puts RestClient.post(
    url,
    { user: { name: name, email: email } }
  )
end

#create_user("Gizmo", "gizmo@gizmo.gizmo")

begin
  create_user("Anonymous person")
rescue ArgumentError
  puts "Nope; we'll need your email!"
end

create_user("Other", "other@other.other")
