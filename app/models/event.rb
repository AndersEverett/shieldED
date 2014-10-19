class Event < ActiveRecord::Base
	validates_presence_of :details
	belongs_to :user

  def self.search(search)
    if search
      p search
      where("details LIKE ?", "%#{search}%")
    else
      find(:all)
    end
  end

end
