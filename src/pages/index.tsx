import * as Tabs from '@radix-ui/react-tabs'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const Index = () => {
  const TABS = [
    {
      tab: 'all',
      title: 'All',
    },
    {
      tab: 'pending',
      title: 'Pending',
    },
    {
      tab: 'completed',
      title: 'Completed',
    },
  ]
  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>

        <Tabs.Root className="TabsRoot pt-10" defaultValue="all">
          <Tabs.List className="flex gap-2">
            {TABS?.map((item) => {
              return (
                <Tabs.Trigger
                  className="TabsTrigger rounded-full border border-gray-200 px-6 py-3 text-sm font-bold text-[#334155] data-[state=active]:bg-[#334155] data-[state=active]:text-white"
                  key={item?.tab}
                  value={item?.tab}
                >
                  {item?.title}
                </Tabs.Trigger>
              )
            })}
          </Tabs.List>
          {TABS?.map((item) => {
            return (
              <Tabs.Content
                key={item?.tab}
                className="TabsContent"
                value={item?.tab}
              >
                <div className="pt-10">
                  <TodoList tab={item?.tab} />
                </div>
              </Tabs.Content>
            )
          })}
        </Tabs.Root>

        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
