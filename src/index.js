import {get} from './util/get'
import {insert} from './util/insert'
import {Results} from './components/Result'
import {Error} from './components/Error' 

const $results = document.querySelector('[data-js="results"]')
const $form = document.querySelector('[data-js="form"]')
const $input = document.querySelector('[data-js="input"]')

const data = get('/slang')

const clean = arr => key => arr.filter(obj => obj.name === key)[0]

const content = info => info ? Results(info) : Error

const handleSubmit = (e) => {
  e.preventDefault()
  const key = $input.value
  data.then((slangs) => insert($results)(content(clean(slangs)(key))))
}
$form.addEventListener('submit', handleSubmit)
