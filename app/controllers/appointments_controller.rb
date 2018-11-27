class AppointmentsController < ApplicationController
  def index
    @appointment = Appointment.new
    @appointments = Appointment.order(time: :asc)
  end

  def create
    @appointment = Appointment.new(appointment_params)
    if @appointment.save
      p '******************************'
      p @appointment
      p '******************************'

      render json: @appointment.reload
    else
      render json: @appointment.errors, status: :unprocessable_entity
    end
  end

  private

  def appointment_params
    p '******************************'
    p params
    p '******************************'
    params.require(:appointment).permit(:title, :time)
  end
end
