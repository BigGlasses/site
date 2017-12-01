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
        uiCopyRestStub(stub.identifier);e.stopPropagation();
    };
    var deleteCommand = function (e) {
        uiDeleteRestStub(stub.identifier);e.stopPropagation();
    };
    var changeCommand = function (e) {
        changeCurrentRestStub(stub.identifier);e.stopPropagation();
    };
    var upCommand = function (e) {
        moveUpCurrentRestStub(stub.identifier);e.stopPropagation();
    };
    var downCommand = function (e) {
        moveDownCurrentRestStub(stub.identifier);e.stopPropagation();
    };
    var colorClass = "";
    if (stub.selected) colorClass += " restStubSelectSelected";
    if (stub.success) colorClass += " restStubSelectSuccess";
    if (stub.ranTest && stub.success == false) colorClass += " restStubSelectFailure";
    var resourceShorter = stub.resource;
    resourceShorter = resourceShorter.substring(Math.max(0, resourceShorter.length - 16), resourceShorter.length);
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
                    "Del"
                )
            ),
            React.createElement(
                "div",
                { className: "col-2 offset-1" },
                React.createElement(
                    "button",
                    { type: "button", className: "btn btn-info", onClick: upCommand },
                    "/\\"
                )
            ),
            React.createElement(
                "div",
                { className: "col-9 text-left restStubSelect-type" },
                resourceShorter
            ),
            React.createElement(
                "div",
                { className: "col-2" },
                React.createElement(
                    "button",
                    { type: "button", className: "btn btn-info", onClick: downCommand },
                    "\\/"
                )
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

function consoleMessage(m) {
    s = {};
    if (m.toLowerCase().includes("success") || m.toLowerCase().includes("succeed")) {
        s['color'] = "green";
    }
    if (m.toLowerCase().includes("data") || m.toLowerCase().includes("new")) {
        s['color'] = "blue";
    }
    if (m.toLowerCase().includes("fail")) {
        s['color'] = "red";
    }
    return React.createElement(
        "div",
        { className: "col-12", style: s },
        React.createElement(
            "a",
            null,
            " ",
            m,
            " "
        )
    );
}