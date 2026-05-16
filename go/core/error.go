package core

type XenoCantoError struct {
	IsXenoCantoError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewXenoCantoError(code string, msg string, ctx *Context) *XenoCantoError {
	return &XenoCantoError{
		IsXenoCantoError: true,
		Sdk:              "XenoCanto",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *XenoCantoError) Error() string {
	return e.Msg
}
