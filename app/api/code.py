import plotly.graph_objects as go
import plotly.express as px
import pandas as pd
def visualization(data: pd.DataFrame):
    colors = px.colors.qualitative.Set3
    fig = px.bar(data, x='actor_id', y='actor_count', color='actor_id', color_discrete_map=dict(zip(data['actor_id'].unique(), colors)))
    fig.update_layout(title='Actor Count per Actor ID', xaxis_title='Actor ID', yaxis_title='Actor Count', plot_bgcolor='white', paper_bgcolor='white', font=dict(color='black'))
    return fig