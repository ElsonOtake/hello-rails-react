class Api::V1::GreetingsController < ApplicationController

  # GET /greetings
  def index
    greeting = Greeting.find(rand(1..5))
    render json: greeting, status: :ok
  end
end
