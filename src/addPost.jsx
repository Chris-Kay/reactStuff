require(['../react.min', 'posts' ], function (React, Posts) {
var ref;
    var AddPost = React.createClass({

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
                     <div>
                      <form onSubmit={this.addPost}>
                        <label>Heading</label>
                        <input ref='heading'></input>
                          <br />

                        <label>Sub-Heading</label>
                        <input ref='subHeading'></input>
                          <br />

                        <label>Body</label>
                        <textarea ref='body'></textarea>
                          <br />
                        <label>Add Image</label>
                        <input type="file" ref="image"></input>
                        <br />
                        <hr />
                        <input type='submit' name='Submit'></input>
                      </form>
                   </div>
                 )
             }
         })
         React.render(<AddPost />, document.body);
  });
