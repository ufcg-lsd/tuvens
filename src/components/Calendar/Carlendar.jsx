import react from 'react'
import mobiscroll from 'mobiscroll'
import '@mobiscroll/react/dist/css/mobiscroll.min.css'

mobiscroll.settings = {
    theme: 'ios',
    themeVariant: 'dark'
};

class App extends React.Component {
    constructor(props) {
          super(props)

        this.state = {
            myEvents: []
        };
        
        mobiscroll.util.getJson('https://trial.mobiscroll.com/events/', (events) => {
            this.setState({ myEvents: events });
        }, 'jsonp');
    }
    render() {
        return (
            <mobiscroll.Form>
                <div className="mbsc-grid">
                    <div className="mbsc-row">
                        <div className="mbsc-col-sm-12 mbsc-col-md-4">
                            <mobiscroll.FormGroup>
                                <mobiscroll.FormGroupTitle>One week view</mobiscroll.FormGroupTitle>
                                <mobiscroll.Eventcalendar
                                    display="inline"
                                    data={this.state.myEvents}
                                    view={{
                                        calendar: { type: 'week' }
                                    }}
                                />
                            </mobiscroll.FormGroup>
                        </div>
                        <div className="mbsc-col-sm-12 mbsc-col-md-4">
                            <mobiscroll.FormGroup>
                                <mobiscroll.FormGroupTitle>Two week view</mobiscroll.FormGroupTitle>
                                <mobiscroll.Eventcalendar
                                    display="inline"
                                    data={this.state.myEvents}
                                    view={{
                                        calendar: { type: 'week', size: 2 }
                                    }}
                                />
                            </mobiscroll.FormGroup>
                        </div>
                        <div className="mbsc-col-sm-12 mbsc-col-md-4">
                            <mobiscroll.FormGroup>
                                <mobiscroll.FormGroupTitle>Three week view</mobiscroll.FormGroupTitle>
                                <mobiscroll.Eventcalendar
                                    display="inline"
                                    data={this.state.myEvents}
                                    view={{
                                        calendar: { type: 'week', size: 3 }
                                    }}
                                />
                            </mobiscroll.FormGroup>
                        </div>
                    </div>
                </div>
            </mobiscroll.Form>
        );
    }    
}