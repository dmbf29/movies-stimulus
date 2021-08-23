class MoviesController < ApplicationController
  def index
    @movies = Movie.order(year: :desc)

    if params[:query].present?
      @movies = @movies.where('title ILIKE ?', "%#{params[:query]}%")
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
