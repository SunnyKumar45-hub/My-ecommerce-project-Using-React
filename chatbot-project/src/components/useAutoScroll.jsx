import {useEffect, useRef} from 'react'

        export function useAutoScroll(chatMessages) {
              const ref = useRef(null);

              useEffect(() => {
                const containerElem = ref.current;
              if(containerElem) {
                containerElem.scrollTop = containerElem.
                scrollHeight;
              }
              }, [chatMessages]);

              return ref;
          }