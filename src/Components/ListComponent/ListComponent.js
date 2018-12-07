import React, { Component } from 'react';

class ListComponent extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            page: 1,
            seed: 1,
            data: [],
            isLoading: false,
          }
    }
    componentDidMount() {
        const { page, seed } = this.state;
        const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=30`;
        this.setState({ isLoading: true });
        fetch(url)
            .then(response => response.json())
            .then(responseJson => {
                this.setState({
                    data: responseJson.results,
                    isLoading: false,
                });
            })
            .catch(exeption => {
                this.setState({ isLoading: false });
            });
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.data.map((item, index) =>
                        <li onClick={() => this.props.history.push(`/details/?id=` + index)}>
                            <img src={item.picture.thumbnail} alt="product" /><br/>
                            {item.name.first}
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}
export default ListComponent;