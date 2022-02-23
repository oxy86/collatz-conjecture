import { LineChart, Line, XAxis, YAxis, CartesianGrid, LabelList, Label, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const SimpleLineChart = (props) => {
    return (
        <div className={props.className}>
            <ResponsiveContainer aspect={1.5} width={800} >
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
                    <XAxis dataKey="step">
                        <Label value="Step" offset={-10} position="insideBottomRight" />
                    </XAxis>
                    <YAxis dataKey="num" label={{ value: 'Value', angle: -90, position: 'insideLeft' }} />
                    {/* <Tooltip /> */}
                    <Tooltip separator="" cursor={{ strokeDasharray: '3 3' }}
                        formatter={(value, name, props) => ['', "Value: " + value + ( value % 2 == 0 ? " (even)" : "(odd)")]}
                        labelFormatter={(value, name, props) => "step: " + value}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="num" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}