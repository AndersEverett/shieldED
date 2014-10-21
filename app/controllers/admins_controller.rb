class AdminsController < ApplicationController

  def admin_dashboard

    @events = Event.all
    @total = @events.length
    @latest = Event.last(5)

  end

  def search
    @latest = Event.last(5)
    @results = Event.search(params[:search])
    render :json => @results
  end

  def pie
    totals = Event.get_totals
    render :json => {:totals => totals}
  end

  def bubbles
    @event = Event.last
    render :json => {}
  end

end
