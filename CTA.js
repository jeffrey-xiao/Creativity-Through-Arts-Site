EventDescriptions = new Mongo.Collection('eventdescriptions');
TeamMembers = new Mongo.Collection('teammembers');

TeamMembers.insert({teammemberName: "Jeffrey Xiao", 
                    teammemberImg: "/media/team/jeffrey.jpg",
                    teammemberModal: "jeffrey"
                   });



if (Meteor.isClient) {
    Meteor.subscribe("teammembers");
    Template.homePage.rendered = new WOW().init()

    Template.eventsPanel.helpers({
        eventdescriptions: function(){
            return EventDescriptions.find()
        },
        eventCount:function(){
	       return EventDescriptions.find().count();
        },
        eventOccur:function(){
	       if(EventDescriptions.find().count() > 0){
		      return true;
           }
        }
    });

    Template.teamPanel.helpers({
        teammembers:function(){
            return TeamMembers.find()
        }
    });

    Template.teamPopup.helpers({
        teammembers:function(){
            return TeamMembers.find()
        }
    });   
}

if (Meteor.isServer) {
    Meteor.publish('teammembers', function() {
        return TeamMembers.find();
    });
}
