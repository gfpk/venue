class ShowitemsController < ApplicationController
  # GET /showitems
  # GET /showitems.json
before_filter :authenticate_user!, except: [:index, :show]
  load_and_authorize_resource
  
  def index
    @showitems = Showitem.all
    @homepage = true

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @showitems }
    end
  end

  # GET /showitems/1
  # GET /showitems/1.json
  def show
    @showitem = Showitem.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @showitem }
    end
  end

  # GET /showitems/new
  # GET /showitems/new.json
  def new
    @showitem = Showitem.new
    
    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @showitem }
    end
  end

  # GET /showitems/1/edit
  def edit
    @showitem = Showitem.find(params[:id])
  end

  # POST /showitems
  # POST /showitems.json
  def create
    @showitem = Showitem.new(params[:showitem])

    respond_to do |format|
      if @showitem.save
        format.html { redirect_to @showitem, notice: 'Showitem was successfully created.' }
        format.json { render json: @showitem, status: :created, location: @showitem }
      else
        format.html { render action: "new" }
        format.json { render json: @showitem.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /showitems/1
  # PUT /showitems/1.json
  def update
    @showitem = Showitem.find(params[:id])

    respond_to do |format|
      if @showitem.update_attributes(params[:showitem])
        format.html { redirect_to @showitem, notice: 'Showitem was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @showitem.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /showitems/1
  # DELETE /showitems/1.json
  def destroy
   @showitem = Showitem.find(params[:id])
   respond_to do |format|
    if @showitem.destroy
            format.html { redirect_to showitems_url, notice: 'ShowItem was successfully destroyed.' }
            format.json { head :no_content }
          else
            format.html { redirect_to showitems_url, alert: "Don't kill me yet, I have tickets in cart " }
            format.json { render json: @showtime.errors, status: :unprocessable_entity }
          end    
      end
    end
end
