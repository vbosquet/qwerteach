require 'rails_helper'

RSpec.describe Api::UpdateProfileController, type: :controller do

  describe "GET #save" do
    it "returns http success" do
      get :save
      expect(response).to have_http_status(:success)
    end
  end

end
