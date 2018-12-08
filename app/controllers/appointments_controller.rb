class AppointmentsController < ApplicationController
  def index
    @appointments = Appointment.order(time: :asc)
    render(
      component: 'Appointments',
      props: { appointments: @appointments },
      prerender: false
    )
  end

  def create
    @appointment = Appointment.new(appointment_params)
    if @appointment.save
      render json: @appointment.reload
    else
      render json: @appointment.errors, status: :unprocessable_entity
    end
  end

  private

  def appointment_params
    params.require(:appointment).permit(:title, :time)
  end
end
