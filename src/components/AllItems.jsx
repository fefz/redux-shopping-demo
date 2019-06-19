import React from "react";
import Item from "../components/Item";
import {List, Avatar, Button} from 'antd';

const AllItems = ({itemsList, addToCart}) => {
    return (

        <List
            itemLayout="horizontal"
            dataSource={itemsList}
            renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src={item.thumb}/>}
                        title={item.title}
                        description={'count:' + item.count}
                    />
                    <Button onClick={() => addToCart(item.id)}
                            disabled={item.count > 0 ? '' : 'disabled'}
                    >{item.count > 0 ? 'Add to cart' : 'Sold out'}</Button>
                </List.Item>
            )}
        />
    );
};

export default AllItems;
