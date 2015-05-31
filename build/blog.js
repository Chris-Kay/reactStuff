require(['../react.min', 'posts' ], function (React, Posts) {

    var App = React.createClass({displayName: "App",

        mixins: [ReactFireMixin],
        deletePerson: function (post) {
          console.log(post.id);
        var selctedItem = new Firebase('https://brilliant-inferno-9224.firebaseio.com/' + post.id);
        selctedItem.remove();

        },
        getInitialState: function() {
            return {
                blogData: []
            }
        },
        componentWillMount: function() {
            this.bindAsArray(new Firebase('https://brilliant-inferno-9224.firebaseio.com/'), 'blogData')
        },

        render: function () {
                 var that = this;
                 return (
                     React.createElement("div", null, 
                         this.state.blogData.map(function(post) {
                             return (
                                 React.createElement(Posts, {onClick: that.deletePerson.bind(null, post), post: post})
                             )
                         }, this)
                     )
                 )
             }
         })
         React.render(React.createElement(App, null), document.body);
  });
