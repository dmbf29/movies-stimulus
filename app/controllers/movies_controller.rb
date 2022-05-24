class MoviesController < ApplicationController
  def index
    @movies = Movie.order(year: :desc)

    if params[:query].present?
      @movies = @movies.where('title ILIKE ?', "%#{params[:query]}%")
      # @movies = @movies.search_by_title(params[:query]) # the PG search way
    end
    # check if it's an HTML request OR if it's a TEXT request
    respond_to do |format|
      format.html # render 'index.html.erb'
      format.text { render partial: 'movies/list', locals: { movies: @movies }, formats: [:html]}
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
