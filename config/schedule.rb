# Use this file to easily define all of your cron jobs.
#set :job_template, "/bin/bash -i -c ':job'"
#job_type :awesome, '/usr/local/bin/awesome :task :fun_level'
# It's helpful, but not entirely necessary to understand cron before proceeding.
# http://en.wikipedia.org/wiki/Cron

# Example:
#
 set :output, "/log/cron.log"
#
# every 2.hours do
#   command "/usr/bin/some_great_command"
#   runner "MyModel.some_method"
#   rake "some:great:rake:task"
# end
#
# every 4.days do
#   runner "AnotherModel.prune_old_records"
# end

# Learn more: http://github.com/javan/whenever
every 2.minutes do
 runner "Cart.all.each{ |c|  c.cart_cleanup}"
end