import { useState, useEffect } from 'react';

import { OrderableWord } from '~/components/Basic/OrderableWord';
import { WordBox } from '~/components/Basic/WordBox';
import { Word } from '~/components/Basic/Word';

import { OrderWords } from '../../index';

import { boxOrderWordsMock } from '../_mock';

export const BoxMultipleOrderWords = () => {
  const [items, setItems] = useState(boxOrderWordsMock.values);

  const wordItems = items.map((_item) => _item.value);

  const handleReorder = (newOrder: typeof wordItems) => {
    const orderedItems = newOrder.map((_item) => ({
      value: _item,
      dragging: false,
      dragged: true,
      outsideBox: true,
      insideOrder: true
    })) as typeof items;

    const leftItems = items.filter((_item) => {
      return !orderedItems.find(
        (_orderedItem) => _orderedItem.value === _item.value
      );
    });

    setItems([...orderedItems, ...leftItems]);
  };

  const handleDrag = (value: string, event: 'start' | 'end') => {
    const newItems = items.map((_item) => {
      if (_item.value === value) {
        return {
          ..._item,
          dragging: event === 'start',
          dragged: event === 'start' || _item.insideOrder,
          outsideBox: _item.insideOrder
        };
      }

      return _item;
    });

    setItems(newItems);
  };

  const handleMouse = (event: 'enter' | 'leave') => {
    const newItems = items.map((_item) => {
      if (_item.dragging) {
        return { ..._item, insideOrder: event === 'enter' };
      }

      return _item;
    });

    setItems(newItems);
  };

  return (
    <section className="flex flex-col gap-6">
      <OrderWords
        values={wordItems}
        onReorder={handleReorder}
        onMouseEnter={() => handleMouse('enter')}
        onMouseLeave={() => handleMouse('leave')}
      >
        {items.map(({ value, dragged, outsideBox, insideOrder }) => {
          return dragged && outsideBox && insideOrder ? (
            <OrderableWord
              key={`multiple-${value}`}
              id={`multiple-${value}`}
              layoutId={`orderable-${value}`}
              value={value}
            >
              {value}
            </OrderableWord>
          ) : null;
        })}
      </OrderWords>

      <WordBox>
        {items.map(({ value, dragged, outsideBox, insideOrder }) => {
          return !dragged || !outsideBox || !insideOrder ? (
            <Word
              key={`box-multiple-${value}`}
              id={`box-multiple-${value}`}
              layoutId={`orderable-${value}`}
              onDragStart={() => handleDrag(value, 'start')}
              onDragEnd={() => handleDrag(value, 'end')}
            >
              {value}
            </Word>
          ) : null;
        })}
      </WordBox>
    </section>
  );
};
