import { LineChart, Line, XAxis, YAxis, CartesianGrid, LabelList, Label, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const renderColorfulLegendText = (value, entry, index) => {
    const { color } = entry;
  
    if ( value == 'ct') {
        return <span style={{ color }}>x = 1</span>;    
    }
    else {
        return <span style={{ color }}>hailstone value {value} </span>;
    }
        
  };

  

export const SimpleLineChart = (props) => {
    return (
        <div className={props.className}>
            <ResponsiveContainer aspect={1.5} width={600} >
                <LineChart
                    data={props.data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 50,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="x">
                        <Label value="Step" offset={-10} position="insideBottomRight" />
                    </XAxis>
                    <YAxis dataKey={props.dataKeyY} label={{ value: 'Value', angle: -90, position: 'insideLeft' }} />
                    {/* <Tooltip /> */}
                    <Tooltip separator="" cursor={{ strokeDasharray: '3 3' }}
                        formatter={(value, name, props) => name != 'ct' ? ['', "Value: " + value + ( value % 2 == 0 ? " (even)" : " (odd)")] : ['', "x = 1 " ] }
                        labelFormatter={(value, name, props) => "step: " + value}
                    />
                    <Line type="linear" dataKey={props.dataKeyY} stroke="#8884d8" activeDot={{ r: 6 }} dot={{ stroke: '#8884d8', strokeWidth: 2, r: 2}} />
                    <Line type="monotone" dataKey="ct" stroke="#00ff00" strokeDasharray="3 4 5 2" activeDot={{ r: 1 }}  dot={false} />
                    <Legend verticalAlign="bottom" height={36} formatter={renderColorfulLegendText}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}