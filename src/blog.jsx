require(['../react.min', 'posts' ], function (React, Posts) {

    var App = React.createClass({

        mixins: [ReactFireMixin],
        deletePerson: function (post) {
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
                     <div>
                         {this.state.blogData.reverse().map(function(post) {
                             return (
                                 <Posts onClick={that.deletePerson.bind(null, post)} post={post}></Posts>
                             )
                         }, this)}
                     </div>
                 )
             }
         })
         React.render(<App />, document.getElementById('blog'));
  });
