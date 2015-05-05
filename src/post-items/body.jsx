define (function() {
     return React.createClass({
         render: function () {
             return (
                 <div dangerouslySetInnerHTML={{__html: this.props.body}} />
             );
         }
     });
});
