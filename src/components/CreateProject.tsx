import ExF, { Component, CustomElement } from 'exf-ts';

@CustomElement({
    selector: 'exf-create-project'
})
export class CreateProject extends Component {

    stylize() {
        return (
            <style>
                
            </style>
        )
    }

    render() {

        return (
            <div className="create-project">
                create project
            </div>
        )
    }
}