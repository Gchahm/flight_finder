require "test_helper"

class Api::V1::FlightsControllerTest < ActionDispatch::IntegrationTest
  test "should get search" do
    get api_v1_flights_search_url
    assert_response :success
  end
end
