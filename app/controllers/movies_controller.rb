class MoviesController < ApplicationController
  def index
    # get request
    @movies = Movie.order(year: :desc)

    if params[:query].present?
      @movies = @movies.where('title ILIKE ?', "%#{params[:query]}%")
    end

    # i have two types of requests: HTML and TEXT
    respond_to do |format| # format ^^^
      format.html # follow the flow of rails (index.html.erb)
      format.text { render partial: 'movies/list', locals: { movies: @movies }, formats: [:html] }
    end
  end

  def update
    # TODO
    raise
  end

  private

  def movie_params
    params.require(:movie).permit(:title, :year)
  end
end
