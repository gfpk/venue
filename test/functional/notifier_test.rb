require 'test_helper'

class NotifierTest < ActionMailer::TestCase
  test "ticket_purchased" do
    mail = Notifier.ticket_purchased
    assert_equal "Ticket purchased", mail.subject
    assert_equal ["to@example.org"], mail.to
    assert_equal ["from@example.com"], mail.from
    assert_match "Hi", mail.body.encoded
  end

end
