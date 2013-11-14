if version < 600
  syntax clear
elseif exists("b:current_syntax")
  finish
endif

syn case ignore
syn match log4jHeader  "[0-9\/\-]\+ [0-9\:\,]\+ [a-z]\+ [a-z\:]\+" contains=log4jDate,log4jTime,log4jLevelNormal,log4jLevelAlarm,log4jLogger
syn match log4jDate    "[0-9\/\-]\+ " contained
syn match log4jTime    "[0-9\:\,]\+ " contained
syn match log4jLogger  "[a-z\-.]\+:" contained 
syn case match
syn match log4jLevelNormal "\(DEBUG\|INFO\|TRACE\)" contained
syn match log4jLevelAlarm "\(ERROR\|FATAL\|WARN\)" contained


if version >= 508 || !exists("did_log4j_syntax_inits")
  if version < 508
    let did_log4j_syntax_inits = 1
    command! -nargs=+ HiLink hi link <args>
  else
    command! -nargs=+ HiLink hi def link <args>
  endif

  HiLink log4jDate        String
  HiLink log4jTime        Type
  HiLink log4jLevelNormal Keyword  
  HiLink log4jLevelAlarm  Error 
  HiLink log4jLogger      Comment 

  delcommand HiLink
endif

let b:current_syntax = "log4j"
