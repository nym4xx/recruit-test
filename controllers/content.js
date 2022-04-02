import { Content } from '../models/content.js'
import fetch  from 'node-fetch'

// Get
export const getContent = async (req, res, next) => {
    const contents =  Content.findAll()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            next(err)
        })
}


/**
 * This function gets a remote object from following url :
 * https://jsonplaceholder.typicode.com/todos/1
 * This method should only return title and completed
 */
export const getWebContent = async (req, res, next) => {
    
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => {
            res.json({title: json.title, completed: json.completed})
        })
        .catch(err => {
            next(err)
        })
}
