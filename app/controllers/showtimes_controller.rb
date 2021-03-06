class ShowtimesController < ApplicationController
  # GET /showtimes
  # GET /showtimes.json..

  before_filter :authenticate_user!, except: [:index, :show]
  
  def index
    @showtimes = Showtime.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @showtimes }
    end
  end

  # GET /showtimes/1
  # GET /showtimes/1.json
  def show
    @showtime = Showtime.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @showtime.tickets }
    end
  end

  # GET /showtimes/new
  # GET /showtimes/new.json
  def new
    @showtime = Showtime.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @showtime }
    end
  end

  # GET /showtimes/1/edit
  def edit
    @showtime = Showtime.find(params[:id])
  end

  # POST /showtimes
  # POST /showtimes.json
  def create
    @showtime = Showtime.new(params[:showtime])

    respond_to do |format|
      if @showtime.save
        format.html { redirect_to @showtime, notice: 'Showtime was successfully created.' }
        format.json { render json: @showtime, status: :created, location: @showtime }
      else
        format.html { render action: "new" }
        format.json { render json: @showtime.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /showtimes/1
  # PUT /showtimes/1.json
  def update
    @showtime = Showtime.find(params[:id])

    respond_to do |format|
      if @showtime.update_attributes(params[:showtime])
        format.html { redirect_to @showtime, notice: 'Showtime was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @showtime.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /showtimes/1
  # DELETE /showtimes/1.json
  def destroy
    @showtime = Showtime.find(params[:id])
    @showtime.destroy

    respond_to do |format|
      if @showtime.destroy
            format.html { redirect_to showtimes_url, notice: 'showtime was successfully destroyed.' }
            format.json { head :no_content }
          else
            format.html { redirect_to showtimes_url, alert: "Don't kill me yet, I have tickets in cart " }
            format.json { render json: @showtime.errors, status: :unprocessable_entity }
          end    
      end
    end
  
end
