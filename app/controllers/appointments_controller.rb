class AppointmentsController < ApplicationController
  def index
    @appointment = Appointment.new
    @appointments = Appointment.order(time: :asc)
  end

  def create
    @appointment = Appointment.create(appointment_params)
    respond_to do |format|
      format.js
    end
  end

  private

  def appointment_params
    params.require(:appointment).permit(:title, :time)
  end
end
