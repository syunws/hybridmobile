import React, { Component } from 'react';
import {StyleSheet, View,Text} from 'react-native';

class TodoItem extends Component {
    render() {
        const todoStateUpdate = this.props.onToggle;
        const todoRemove = this.props.onRemove;    
        return (    
            

                <View className="todo-item" onTouchEnd={()=>todoStateUpdate(this.props.todoId)}>                   
                    <Text style={ this.props.done&&styles.checked }> {this.props.todo}</Text>
                    <Text 
                        className="remove"
                        onTouchEnd = {(e)=>{
                            e.stopPropagation();
                            todoRemove(this.props.todoId);
                            }
                        }
                    >&times;</Text>
                </View> 
                 
        );
    }
}

export default TodoItem;
const styles = StyleSheet.create({
    todItem : {
        padding: '10',
        // display: 'flex',
        // alignItems: 'center', /* 세로 가운데 정렬 */        
        // transition: 'all 0.15s',
        // userSelect: 'none'
      },
      checked : {
        textDecorationLine: 'line-through',
        color: '#adb5bd'
      }
});



// .todo-item {
//     padding: 1rem;
//     display: flex;
//     align-items: center; /* 세로 가운데 정렬 */
//     cursor: pointer;
//     transition: all 0.15s;
//     user-select: none;
//   }
//  .todo-item:hover {
//     background: #e3fafc;
//   }
  
//   /* todo-item 에 마우스가 있을때만 .remove 보이기 */
//   .todo-item:hover .remove {
//     opacity: 1;
//   }
  
//   /* todo-item 사이에 윗 테두리 */
//   .todo-item + .todo-item {
//     border-top: 1px solid #f1f3f5;
//   }
  
  
//   .remove {
//     margin-right: 1rem;
//     color: #e64980;
//     font-weight: 600;
//     opacity: 0;
//   }
  
//   .todo-text {
//     flex: 1; /* 체크, 엑스를 제외한 공간 다 채우기 */
//     word-break: break-all;
//   }
  
//   .checked {
//     text-decoration: line-through;
//     color: #adb5bd;
//   }
  
//   .check-mark {
//     font-size: 1.5rem;
//     line-height: 1rem;
//     margin-left: 1rem;
//     color: #3bc9db;
//     font-weight: 800;
    
//   }
  
