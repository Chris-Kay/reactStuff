require(['../react.min', 'posts' ], function (React, Posts) {
var ref;
    var AddPost = React.createClass({displayName: "AddPost",

        mixins: [ReactFireMixin],
        addPost: function (e) {
        e.preventDefault();
        var newref = ref.push();
        newref.set({
              id: newref.name(),
              heading: this.refs.heading.getDOMNode().value,
              subHeading: this.refs.subHeading.getDOMNode().value,
              body: this.refs.body.getDOMNode().value,
              image: this.refs.image.getDOMNode().value
            });
        },
        componentWillMount: function() {
            ref = new Firebase('https://brilliant-inferno-9224.firebaseio.com/');
        },

        render: function () {
                 return (
                     React.createElement("div", null, 
                      React.createElement("form", {onSubmit: this.addPost}, 
                        React.createElement("label", null, "Heading"), 
                        React.createElement("input", {ref: "heading"}), 
                          React.createElement("br", null), 

                        React.createElement("label", null, "Sub-Heading"), 
                        React.createElement("input", {ref: "subHeading"}), 
                          React.createElement("br", null), 

                        React.createElement("label", null, "Body"), 
                        React.createElement("textarea", {ref: "body"}), 
                          React.createElement("br", null), 
                        React.createElement("label", null, "Add Image"), 
                        React.createElement("input", {type: "file", ref: "image"}), 
                        React.createElement("br", null), 
                        React.createElement("hr", null), 
                        React.createElement("input", {type: "submit", name: "Submit"})
                      )
                   )
                 )
             }
         })
         React.render(React.createElement(AddPost, null), document.body);
  });
