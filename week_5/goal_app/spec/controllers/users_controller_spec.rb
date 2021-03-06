require 'rails_helper'


RSpec.describe UsersController, type: :controller do
  let(:user) { User.create!(username: "bomber_guy", password: "123456") }

  describe "GET #show" do
    it "renders the show template" do
      get :show, id: user.id
      expect(response).to render_template(:show)
    end
  end

  describe "GET #index" do
    it "renders the index template" do
      get :index
      expect(response).to render_template("index")
    end
  end

  describe "POST #create" do
    context "with invalid params" do
      it "validates the presence of the user's username and password" do
        post :create, user: { username: "bomber_guy2", password: ""}
        expect(response).to render_template("new")
        expect(flash[:errors]).to be_present
      end

      it "validates that the password is at least 6 characters long" do
        post :create, user: { username: "bomber_guy2", password: " " }
        expect(response).to render_template("new")
        expect(flash[:errors]).to be_present
      end
    end

    context "with valid params" do
      it "redirects user to user show on success" do
        post :create, user: { username: "bomber_guy2", password: "123456" }
        expect(response).to redirect_to(user_url(User.last))
      end
    end
  end
end
