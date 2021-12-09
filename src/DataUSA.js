import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getData, fetchFail } from './Actions/actions'


    const DataUSA = (props) => {
        const { data, isFetching, error } = props
        useEffect(() => {
            getData()
        }, [])

        if (error) {
            return <p>There was an error: {error}</p>
        }
        if (isFetching) {
            return <p>We are fetching the nation for you.</p>
        }

        const handleClick = () => {
            props.getData()
        }

        return (
            <div className='App'>
                <h2> Information! </h2>
                <p>Year: {data.Year}</p>
                <p>Nation: {data.Nation}</p>
                <p>Population: {data.Population}</p>
                <button onClick={handleClick}>Get information!</button>
            </div>
        )
    }

    const mapStateToProps = (state) => {
        return {
            data: state.data,
            isFetching: state.isFetching,
            error: state.error
        }
    }

export default connect(mapStateToProps, {getData, fetchFail})(DataUSA)