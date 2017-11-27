class RestStubDOM extends React.Component {
    render() {
        return React.createElement(
            "div",
            null,
            "Hello ",
            this.props.rstub.Label
        );
    }
}

function stubSelect(stub) {

    var copyCommand = function (e) {
        ;e.stopPropagation();uiCopyRestStub(stub.identifier);e.stopPropagation();
    };
    var deleteCommand = function (e) {
        ;e.stopPropagation();uiDeleteRestStub(stub.identifier);e.stopPropagation();
    };
    var changeCommand = function (e) {
        e.stopPropagation(); changeCurrentRestStub(stub.identifier)
    };
    var colorClass = "";
    if (stub.selected) colorClass += " restStubSelectSelected";
    if (stub.success) colorClass += " restStubSelectSuccess";
    if (stub.ranTest && stub.success == false) colorClass += " restStubSelectFailure";
    var resourceShorter = stub.resource;
    resourceShorter = resourceShorter.substring(Math.max(0, resourceShorter.length - 32), resourceShorter.length);
    return React.createElement(
        "div",
        { className: "col-12 restStubSelect" + colorClass, key: stub.identifier, onClick: changeCommand },
        React.createElement(
            "div",
            { className: "row" },
            React.createElement(
                "div",
                { className: "col-12 restStubSelect-title" },
                stub.label
            ),
            React.createElement(
                "div",
                { className: "col-4" },
                React.createElement(
                    "button",
                    { type: "button", className: "btn btn-primary", onClick: copyCommand },
                    "Copy"
                )
            ),
            React.createElement(
                "div",
                { className: "col-4" },
                React.createElement(
                    "button",
                    { type: "button", className: "btn btn-danger", onClick: deleteCommand },
                    "Delete"
                )
            ),
            React.createElement(
                "div",
                { className: "col-6 text-left restStubSelect-type" },
                resourceShorter
            ),
            React.createElement(
                "div",
                { className: "col-6 text-right restStubSelect-type" },
                stub.getRequestType()
            ),
            React.createElement(
                "div",
                { className: "col-12 restStubSelect-id" },
                stub.identifier
            )
        )
    );
}