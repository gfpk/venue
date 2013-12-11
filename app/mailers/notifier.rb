class Notifier < ActionMailer::Base
  default :from => 'Box ffice <boxoffice@ticketsonrails.com>'

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.notifier.ticket_purchased.subject
  #
  def ticket_purchased(order)
    @greeting = "Hi"
    @order = order

    mail :to => order.email, :subject => 'Your booking confirmation from Tickets on Rails'
   
  end
end
