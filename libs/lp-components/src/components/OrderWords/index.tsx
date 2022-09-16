import { useState } from 'react';
import { motion, useMotionValue, Reorder } from 'framer-motion';

export const OrderWords = (props: any) => {
  const [words, setWords] = useState([0, 1, 2]);
  const [dragged, setDragged] = useState(false);
  const [dragged1, setDragged1] = useState(false);
  const AY = useMotionValue(0);
  const AY1 = useMotionValue(0);
  const BY = useMotionValue(0);
  const BY1 = useMotionValue(0);

  return (
    <div className="flex flex-col flex-wrap gap-5">
      <motion.section
        className="relative w-6/12 px-6 py-4 border rounded-md shadow-sm h-96"
        layout
      >
        <Reorder.Group
          className="flex"
          axis="x"
          values={words}
          onReorder={setWords}
        >
          {dragged ? (
            <Reorder.Item
              key={words[0]}
              value={words[0]}
              className={`
                flex items-center px-4 py-2 relative z-10
                text-lg font-medium text-blue-900 rounded-md cursor-pointer 
                bg-slate-200 hover:bg-slate-300 w-fit h-fit
              `}
              drag
              layoutId="order-words-0"
            >
              Fox
            </Reorder.Item>
          ) : null}

          {dragged1 ? (
            <Reorder.Item
              key={words[1]}
              value={words[1]}
              className={`
                flex items-center px-4 py-2 relative z-10
                text-lg font-medium text-blue-900 rounded-md cursor-pointer 
                bg-slate-200 hover:bg-slate-300 w-fit h-fit
              `}
              drag
              layoutId="order-words-1"
            >
              Lazy
            </Reorder.Item>
          ) : null}
        </Reorder.Group>
      </motion.section>

      <motion.section
        className="relative flex w-6/12 h-48 gap-4 px-6 py-4 border rounded-md shadow-sm"
        layout
      >
        {!dragged ? (
          <motion.div
            className={`
              flex items-center px-4 py-2 relative z-10
              text-lg font-medium text-blue-900 rounded-md cursor-pointer 
              bg-slate-200 hover:bg-slate-300 w-fit h-fit
            `}
            style={{ y: BY }}
            drag
            dragMomentum={false}
            dragSnapToOrigin={true}
            onDragEnd={({ target }) => {
              const offTop = (target as HTMLElement).offsetTop;
              const wordHeight = (target as HTMLElement).offsetHeight;
              const containerHeight = (
                (target as HTMLElement).offsetParent as HTMLElement
              ).offsetHeight;

              const containerArea = wordHeight + containerHeight;
              const wordPosition = offTop + wordHeight + BY.get();

              wordPosition < 0 && setDragged(true);
            }}
            layoutId="order-words-0"
          >
            Fox
          </motion.div>
        ) : null}

        {!dragged1 ? (
          <motion.div
            className={`
              flex items-center px-4 py-2 relative z-10
              text-lg font-medium text-blue-900 rounded-md cursor-pointer 
              bg-slate-200 hover:bg-slate-300 w-fit h-fit
            `}
            style={{ y: BY1 }}
            drag
            dragMomentum={false}
            dragSnapToOrigin={true}
            onDragEnd={({ target }) => {
              const offTop = (target as HTMLElement).offsetTop;
              const wordHeight = (target as HTMLElement).offsetHeight;
              const containerHeight = (
                (target as HTMLElement).offsetParent as HTMLElement
              ).offsetHeight;

              const containerArea = wordHeight + containerHeight;
              const wordPosition = offTop + wordHeight + BY1.get();

              wordPosition < 0 && setDragged1(true);
            }}
            layoutId="order-words-1"
          >
            Lazy
          </motion.div>
        ) : null}
      </motion.section>
    </div>
  );
};
