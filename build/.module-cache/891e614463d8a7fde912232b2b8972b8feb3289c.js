define (function() {
     return React.createClass({
         render: function () {
             return (
                 React.createElement("div", {dangerouslySetInnerHTML: {__html: this.props.body}})
             );
         }
     });
});
