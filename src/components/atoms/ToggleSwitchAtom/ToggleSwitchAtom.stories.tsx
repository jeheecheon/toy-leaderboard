import type { Meta, StoryObj } from "@storybook/react";
import ToggleSwitchAtom from "@/components/atoms/ToggleSwitchAtom";
import { expect, userEvent, fn } from "@storybook/test";

const meta = {
  title: "Atoms/ToggleSwitch",
  component: ToggleSwitchAtom,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    isOn: false,
    onClick: () => {},
  },
} satisfies Meta<typeof ToggleSwitchAtom>;

export default meta;

type story = StoryObj<typeof meta>;

export const Primary: story = {
  args: {
    isOn: false,
    onClick: fn(),
  },
  async play({ canvasElement, args }) {
    // GIVEN: ToggleSwitchAtom 컴포넌트가 렌더링되었을 때
    const toggleButton = canvasElement.querySelector("button");
    const toggleControl = toggleButton?.firstChild;

    // THEN: 초기 상태에서 클래스 확인 (꺼진 상태)
    expect(toggleControl).not.toHaveClass("transform translate-x-full");

    // WHEN: 토글 버튼 클릭
    await userEvent.click(toggleButton!);

    // THEN: onClick 콜백이 호출되었는지 확인
    await expect(args.onClick).toHaveBeenCalled();

    // args 업데이트 후 상태 확인 (켜진 상태)
    args.isOn = true;
    await expect(toggleControl).toHaveClass("transform");
  },
};
