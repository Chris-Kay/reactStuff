// //var React = require('react.min');
//
//     var Card = React.createClass({
//            render: function () {
//                return (
//                <div>
//                    <h1>{this.props.heading}</h1>
//                    <h2>{this.props.subHeading}</h2>
//                </div>
//                )
//            }
//     })
//
//    var App = React.createClass({
//        getInitialState: function() {
//            return {
//                blogData: this.props.blogData.splice(0)
//            }
//        },
//
//        render: function () {
//            return (
//                <div>
//                    {this.state.blogData.map(function(post) {
//                        return (
//                            <Card heading={post.heading} subHeading={post.subHeading}></Card>
//                        )
//                    }, this)}
//                </div>
//            )
//        }
//    })
//
//React.render(<App blogData={blogData}></App>, document.body);
var people = [
    {
        "name": "Anderson Turner",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/craigrcoles/128.jpg",
        "id": 0
    },
    {
        "name": "Freddy Jones",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/ivanfilipovbg/128.jpg",
        "id": 1
    },
    {
        "name": "Angus Baumbach",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/abovefunction/128.jpg",
        "id": 2
    },
    {
        "name": "Sister Altenwerth",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/ryandownie/128.jpg",
        "id": 3
    }
]


var Card = React.createClass({displayName: "Card",

    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement("h2", null, this.props.name), 
                React.createElement("img", {src: this.props.avatar, alt: ""}), 
                React.createElement("div", null), 
                React.createElement("button", {onClick: this.props.onClick}, "Delete Me")
            )
        )
    }
})

var App = React.createClass({displayName: "App",

    deletePerson: function (person) {
        this.state.people.splice(this.state.people.indexOf(person), 1);

        this.setState({people: this.state.people});
    },

    getInitialState: function () {
        return {
            people: this.props.people.splice(0)
        }
    },

    render: function () {
        var that = this;
        return (
            React.createElement("div", null, 
                this.state.people.map(function (person) {
                    return (
                        React.createElement(Card, {onClick: that.deletePerson.bind(null, person), name: person.name, avatar: person.avatar})
                    )
                }, this)
            )
        )
    }
})


React.render(React.createElement(App, {people: people}), document.body);
