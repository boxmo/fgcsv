require 'yaml'

ps = { partners: [] }

Dir.glob("*").each do |file|
  ps[:partners] << "#{file}"
end

ps[:partners].sort!

File.open("partners.yml","w") do |file|
  file.write ps.to_yaml
end
