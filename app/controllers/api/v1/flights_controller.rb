require 'amadeus'

class Api::V1::FlightsController < ApplicationController
  def search
    amadeus = Amadeus::Client.new
    result = amadeus.shopping.flight_offers_search.get(originLocationCode: params['originLocationCode'],
                                                       destinationLocationCode: params['destinationLocationCode'],
                                                       departureDate: params['departureDate'],
                                                       returnDate: params['returnDate'],
                                                       adults: params['adults'],
                                                       max: 10)
    render json: result.result.to_json
  end
end
