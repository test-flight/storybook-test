import React from 'react';
import tw, { css, styled } from 'twin.macro';

const Input1 = ({ hasHover }: any) => (
  <input css={[tw`border`, hasHover && tw`hover:border-black`]} />
)

const hoverStyles = css`
  &:hover {
    border-color: black;
    ${tw`text-black`}
  }
`
const Input2 = ({ hasHover }: any) => (
  <input css={[tw`border`, hasHover && hoverStyles]} />
)

const Input3 = tw.input`border hover:border-black`

const Input4 = tw(Input3)`border-purple-500`

const StyledInput1 = styled.input(({ hasBorder }: { hasBorder: boolean }) => [
  `color: black;`,
  hasBorder && tw`border-purple-500`,
])
const Input5 = () => <StyledInput1 hasBorder />

const StyledInput2 = styled.input`
  color: black;
  ${({ hasBorder }: { hasBorder: boolean }) => hasBorder && tw`border-purple-500`}
`
const Input6 = () => <StyledInput2 hasBorder />

const InteractionStyles = () => (
  <div tw="hover:(text-black underline) focus:(text-blue-500 underline)" />
)

const MediaStyles = () => <div tw="sm:(w-4 mt-3) lg:(w-8 mt-6)">1</div>

const PseudoElementStyles = () => <div tw="before:(block w-10 h-10 bg-black)" >2</div>

const StackedVariants = () => <div tw="sm:hover:(bg-black text-white)" >3</div>

const GroupsInGroups = () => <div tw="sm:(bg-black hover:(bg-white w-10))" >4</div>

export default function Example() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div tw="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div tw="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            tw="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 tw="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div tw="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form tw="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" tw="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div tw="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  tw="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div tw="flex items-center justify-between">
                <label htmlFor="password" tw="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div tw="text-sm">
                  <a href="#" tw="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div tw="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  tw="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                tw="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p tw="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="#" tw="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export const TWTest: React.FC = () => (<div>
  <div tw="p-2"><Example /></div>
  <div tw="p-2"><Input1 /></div>
  <div tw="p-2"><Input2 /></div>
  <div tw="p-2"><Input3 /></div>
  <div tw="p-2"><Input4 /></div>
  <div tw="p-2"><Input5 /></div>
  <div tw="p-2"><Input6 /></div>
  <div tw="p-2"><InteractionStyles /></div>
  <div tw="p-2"><MediaStyles /></div>
  <div tw="p-2"><PseudoElementStyles /></div>
  <div tw="p-2"><StackedVariants /></div>
  <div tw="p-2"><GroupsInGroups /></div>
</div>)
