(function($){
    var Contacts = [
        { name: "Masud", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family" },
        { name: "Himel", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family" },
        { name: "koushik", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "friend" },
        { name: "Monir", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "colleague" },
        { name: "Fateha", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family" },
        { name: "Moinul", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "colleague" },
        { name: "Zahid", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "friend" },
        { name: "Mamoon", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family" }
    ];
}(jQuery));

//model
var Contact = Backbone.Model.extend({
    defaults: {
        photo: "/image/placeholder.png"
    }
});

//collection
var Directory = Backbone.Collection.extend({
    model: Contact
});

//view
var ContactView = Backbone.View.extend({
    tagName: "article",
    className: "contact-container",
    template: $("#contact-template").html(),

    render: function(){
        var tmpl = _.template(this.template);

        this.$el.html(tmpl(this.model.toJSON()));
        return this;
    }
});


//master view

var DirectoryView = Backbone.View.extend({
    el: $("#contacts"),
    initialize: function(){
        this.collection = new Directory(Contacts);
        this.render();
    },
    render: function(){
        var that = this;
        _.each(this.collection.models, function(item){
            that.renderContact(item);
        },this);
    },
    renderContact: function(){
        var ContactView  = new ContactView({
            model: item
        });
        this.$el.append(ContactView.render().el);
    }
});